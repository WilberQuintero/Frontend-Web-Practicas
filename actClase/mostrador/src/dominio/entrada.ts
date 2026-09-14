import promts from "prompts";

export async function pedirTexto(mensaje: string): Promise<string | undefined> {

    const respuesta = await prompts({
        type: 'text',
        name: 'valor',
        message: mensaje
    })

    const valor: unkonwn = respuesta.valor;

    if (typeof valor !== 'string') {
        return undefined;
    }

    const limpio = valor.trim();

    return (limpio === '') ? undefined : limpio;
}

export async function pedirOpcion(
    mensaje: string,
    opciones: ReadOnlyArray<{ readonly valor: string, readonly etiqueta: string}>,
): Promise <string | undefined> {
    const respuesta = await promts({
        type: 'select',
        name: 'valor',
        message: mensaje,
        choices: opciones.map(o) => ({ title: o.etiqueta, value: o.valor })
    })
    
}