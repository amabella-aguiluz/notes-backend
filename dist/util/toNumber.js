export const toNumber = (value) => {
    const n = Number(value);
    if (isNaN(n))
        throw new Error("Invalid number");
    return n;
};
//# sourceMappingURL=toNumber.js.map