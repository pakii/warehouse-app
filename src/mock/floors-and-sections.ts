export const floor1 = {
    id: 'dsnuwe893',
    name: 'Floor 1',
    number: 1,
    sections: [
        {
            id: 'dbf674w7g',
            number: 1,
            name: 'Section 1'
        },
        {
            id: 'dbf674w7a',
            number: 2,
            name: 'Section 2'
        },
        {
            id: 'dbf674w7b',
            number: 3,
            name: 'Section 3'
        },
        {
            id: 'dbf674w7c',
            number: 4,
            name: 'Section 4'
        }
    ]
};

export const floor2 = {
    id: 'asnuwe893',
    number: 2,
    name: 'Floor 2',
    sections: [
        {
            id: 'abf674w7b',
            number: 1,
            name: 'Section 1'
        },
        {
            id: 'abs674Y7b',
            number: 2,
            name: 'Section 2'
        }
    ]
};

export const floor3 = {
    id: 'bsnuwe884',
    number: 3,
    name: 'Floor 3',
    sections: [
        {
            id: 'abf634w7b',
            number: 1,
            name: 'Section 1'
        },
        {
            id: 'isf634w7b',
            number: 2,
            name: 'Section 2'
        },
        {
            id: 'jhg674Y7b',
            number: 3,
            name: 'Section 3'
        }
    ]
}

export const floorsHash = {
    [floor1.id]: floor1,
    [floor2.id]: floor2,
    [floor3.id]: floor3
};

export const floors = Object.values(floorsHash);
