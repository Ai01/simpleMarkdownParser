const MIN_LENGTH = 2;

const _match = tokens => {
    if (!Array.isArray(tokens) || tokens.length !== MIN_LENGTH) return null;

    const StandardSequence = 'TITLE TEXT';
    const InputSequence = tokens
        .map(item => {
            return item.type;
        })
        .join(' ');

    if (StandardSequence === InputSequence) {
        return tokens[1].value;
    }

    return null;
};

const titleParser = tokens => {
    const value = _match(tokens);

    if (!value) return false;

    return {
        type: 'TITLE_ONE',
        value,
    };
};

module.exports = {
    parser: titleParser,
    minLength: MIN_LENGTH,
};
