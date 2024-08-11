interface Relatorio {
    gerar(conteudo: string): void;
}

class PDFRelatorio implements Relatorio {
    gerar(conteudo: string): void {
        console.log("PDF está sendo gerado.")
    }
}

class ExcelRelatorio implements Relatorio {
    gerar(conteudo: string): void {
        console.log("Excel está sendo gerado.")
    }
}

class RelatorioFactory{
    static createRelatorio(type: string): Relatorio{
        switch(type) {
            case 'pdf':
                return new PDFRelatorio
            case 'Excel':
                return new ExcelRelatorio
            default:
                throw new Error(`Tipo de relatório desconhecido: ${type}`);
        }
    }
}

const gerando = RelatorioFactory.createRelatorio('pdf')
gerando.gerar('pdf')