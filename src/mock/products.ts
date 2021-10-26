import { floor1, floor2, floor3, floorsHash } from './floors-and-sections';

const products = [
    {
        floor: { id: floor1.id, number: floor1.number },
        section: { id: floor1.sections[0].id, number: floor1.sections[0].number },
        code: 'MYTZ 123456',
        quantity: 100
    },
    {
        floor: { id: floor1.id, number: floor1.number },
        section: { id: floor1.sections[0].id, number: floor1.sections[0].number },
        code: 'XYZ 1289',
        quantity: 77
    },
    {
        floor: { id: floor1.id, number: floor1.number },
        section: { id: floor1.sections[1].id, number: floor1.sections[1].number },
        code: 'ACSD 3212',
        quantity: 321
    },
    {
        floor: { id: floor1.id, number: floor1.number },
        section: { id: floor1.sections[1].id, number: floor1.sections[1].number },
        code: 'BDS 3212',
        quantity: 12
    },
    {
        floor: { id: floor1.id, number: floor1.number },
        section: { id: floor1.sections[2].id, number: floor1.sections[2].number },
        code: 'FSADF 3212',
        quantity: 32
    },
    {
        floor: { id: floor2.id, number: floor2.number },
        section: { id: floor2.sections[0].id, number: floor2.sections[0].number },
        code: 'ASD 5678',
        quantity: 65
    },
    {
        floor: { id: floor2.id, number: floor2.number },
        section: { id: floor2.sections[1].id, number: floor2.sections[1].number },
        code: 'BD 4566',
        quantity: 65
    },
    {
        floor: { id: floor3.id, number: floor3.number },
        section: { id: floor3.sections[0].id, number: floor3.sections[0].number },
        code: 'JKFH 9844',
        quantity: 999
    },
    {
        floor: { id: floor3.id, number: floor3.number },
        section: { id: floor3.sections[0].id, number: floor3.sections[0].number },
        code: 'MN 1889',
        quantity: 33
    },
    {
        floor: { id: floor3.id, number: floor3.number },
        section: { id: floor3.sections[1].id, number: floor3.sections[1].number },
        code: 'POI 7344',
        quantity: 111
    },
    {
        floor: { id: floor3.id, number: floor3.number },
        section: { id: floor3.sections[1].id, number: floor3.sections[1].number },
        code: 'GFJH 9834',
        quantity: 723
    },
    {
        floor: { id: floor3.id, number: floor3.number },
        section: { id: floor3.sections[2].id, number: floor3.sections[2].number },
        code: 'OIX 9825',
        quantity: 98
    },
]

const getObjects = ({
    code,
    floorId,
    sectionId
}) => {
    const productIndex = products.findIndex(({ code: productCode }) => code === productCode);
    const floor = floorsHash[floorId];
    if (!floor) {
        throw 'Floor not found';
    }
    const section = floor.sections.find(({ id }) => id === sectionId);
    if (!section) {
        throw 'Section not found';
    }
    return {
        productIndex,
        floor: {
            id: floor.id,
            number: floor.number
        },
        section: {
            id: section.id,
            number: section.number
        }
    }
}
const updateProduct = (params) => {
    const {
        productIndex,
        floor,
        section
    } = getObjects(params);

    if (productIndex < 0) {
        throw 'Product not found';
    }

    products[productIndex].quantity = params.quantity;
    products[productIndex].floor = floor;
    products[productIndex].section = section;
    return products[productIndex];
}


const addProduct = (params) => {
    const {
        productIndex,
        floor,
        section
    } = getObjects(params);

    if (productIndex > -1) {
        throw `Product with code ${params.code} already exists`;
    }

    const product = {
        code: params.code,
        quantity: params.quantity,
        floor,
        section
    }
    products.push(product);
    return product;
}

export const productsData = {
    data: products.slice(),
    updateProduct,
    addProduct
}