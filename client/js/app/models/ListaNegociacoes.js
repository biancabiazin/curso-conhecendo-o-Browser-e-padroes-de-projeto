class ListaNegociacoes {

    construction() {

        this._negociacoes = []
    }

    adicional(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }
}