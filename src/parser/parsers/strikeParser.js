const MIN_LENGTH = 2;

const _match = tokens => {
    if (!Array.isArray(tokens) || tokens.length !== MIN_LENGTH) return null;

    const StandardSequence = 'STRIKE TEXT';
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

const strikeParser = tokens => {
    const value = _match(tokens);

    if (!value) return false;

    return {
        type: 'STRIKE',
        value,
    };
};

module.exports = {
    parser: strikeParser,
    minLength: MIN_LENGTH,
};
