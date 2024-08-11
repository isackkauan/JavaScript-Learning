interface Notificacao {
    enviar(mensagem: string): void;
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SMSNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class NotificacaoFactory {
    static criarNotificacao(type: string): Notificacao {
        switch(type) {
            case 'email':
                return new EmailNotificacao();
            case 'sms':
                return new SMSNotificacao()

        }
    }
}

const emailNotificacao = NotificacaoFactory.criarNotificacao("email");

emailNotificacao.enviar("Banana com sardinha");
