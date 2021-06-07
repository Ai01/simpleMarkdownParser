const MIN_LENGTH = 3;

const _match = tokens => {
    if (!Array.isArray(tokens) || tokens.length !== MIN_LENGTH) return null;

    const StandardSequence = 'TITLE TITLE TEXT';
    const InputSequence = tokens
        .map(item => {
            return item.type;
        })
        .join(' ');

    if (StandardSequence === InputSequence) {
        return tokens[2].value;
    }

    return null;
};

const titleParser = tokens => {
    const value = _match(tokens);

    if (!value) return false;

    return {
        type: 'TITLE_TWO',
        value,
    };
};

module.exports = {
    parser: titleParser,
    minLength: MIN_LENGTH,
};
