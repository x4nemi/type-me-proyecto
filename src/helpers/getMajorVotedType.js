export const getMajorVotedType = (publications) => {
    const types = publications.map((publication) => publication.voted_type);
    const uniqueTypes = [...new Set(types)];
    const typesCount = uniqueTypes.map((type) => ({
        type,
        count: types.filter((t) => t === type).length,
    }));
    typesCount.sort((a, b) => b.count - a.count);
    return typesCount;
};
