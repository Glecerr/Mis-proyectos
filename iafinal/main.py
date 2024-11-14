import streamlit as st
from groq import Groq

modelos = ["llama3-8b-8192","llama3-70b-8192","mixtral-8x7b-32768"]
modelo_en_uso = ""
cliente_usuario = ""
clave_secreta = ""
mensaje = ""

def crear_usuario():
    #LE ASIGNAMOS LA CLAVE A UNA VARIABLE
    clave_secreta = st.secrets["CLAVE_API"]
    #RETORNAMOS LA CLAVE COMO "api_key"
    return Groq(api_key=clave_secreta)

def configurar_modelo(cliente, modelo, mensaje_de_entrada):
    return cliente.chat.completions.create(
        model = modelo,
        messages = [{"role" : "user", "content" : mensaje_de_entrada}],
        stream = True
    )

def generar_respuesta(chat_completo):
    respuesta_completa = ""
    for frase in chat_completo:
        if frase.choices[0].delta.content:
            respuesta_completa += frase.choices[0].delta.content
            yield frase.choices[0].delta.content
    return respuesta_completa

def configurar_pagina():
    #LA PESTAÑA
    st.set_page_config("Mi chat IA")
    #TITULO DE LA PAGINA
    st.title("chat gpt de glecerrr")
    #SIDEBAR
    st.sidebar.title("Panel de Modelos")
    #SELECTOR DE MODELOS
    m = st.sidebar.selectbox("Modelos", modelos, 0)
    #DEVUELVO EL VALOR DE LO SELECCIONADO
    return m

def inicializar_estado():
    if "mensajes" not in st.session_state:
        st.session_state.mensajes = []

def actualizar_historial(rol, contenido, avatar):
    st.session_state.mensajes.append({"role": rol, "content": contenido, "avatar":avatar})

def mostrar_historial():
        for mensaje in st.session_state.mensajes:
                with st.chat_message(mensaje["role"], avatar=mensaje["avatar"]):
                        st.markdown(mensaje["content"])

def area_chat():
        contenedorDelChat = st.container(height=600,border=True)
        # Abrimos el contenedor del chat y mostramos el historial.
        with contenedorDelChat:
                mostrar_historial()

def main():
    #INICIALIZAMOS LA PAGINA
    modelo_en_uso = configurar_pagina()
    #INICIALIZAMOS EL CLIENTE USUARIO CON LA API KEY
    cliente_usuario = crear_usuario()
    #INICIALIZAMOS EL ESTADO "MENSAJES"
    inicializar_estado()
    #INICIALIZAMOS EL AREA DEL CHAT
    area_chat()
    #EL USUARIO TIENE QUE ESCRIBIR ALGO
    mensaje = st.chat_input()
    #SI ESCRIBE ALGO, SE INICIALIZA EL MODELO
    
    chat_completo = None

    if mensaje:
        actualizar_historial("user", mensaje, "😎")
        chat_completo = configurar_modelo(cliente_usuario, modelo_en_uso, mensaje)
    
    if chat_completo:
        with st.chat_message("assistant"):
            respuesta_completa = st.write_stream(generar_respuesta(chat_completo))
        actualizar_historial("assistant", respuesta_completa,"🤖")
        st.rerun()

if __name__ == "__main__":
    main()
