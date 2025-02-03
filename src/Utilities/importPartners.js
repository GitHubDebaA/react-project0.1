// utils/importPartners.js
const importPartnerLogos = () => {
    const context = require.context('../Assets/Partners', false, /\.(png|jpe?g|svg)$/);
    const images = context.keys().map((key) => ({
        name: key.replace('./', ''), 
        src: context(key),
        partner: FetchBrandName(key.replace('./', ''))
    }));
    return images;
};

const FetchBrandName = (asset_name) => {
    let brandName = asset_name;
    switch (asset_name) {
        case 'logo-burger-king.svg':
            brandName = 'Burger King';
            break;
        case 'logo-coca-cola.svg':
            brandName = 'Coca Cola';
            break;
        case 'logo-flipkart.svg':
            brandName = 'Flipkart';
            break;
        case 'logo-jaguar.svg':
            brandName = 'Jaguar';
            break;
        case 'logo-kfc.svg':
            brandName = 'KFC';
            break;
        case 'logo-lotus-bakeries.svg':
            brandName = 'Lotus Bakeries';
            break;
        case 'logo-pepsi.svg':
            brandName = 'Pepsi';
            break;
        case 'logo-radisson.svg':
            brandName = 'Radisson';
            break;
        case 'logo-sbi.svg':
            brandName = 'SBI';
            break;
        case 'logo-sprite.svg':
            brandName = 'Sprite';
            break;
        case 'logo-yes-bank.svg':
            brandName = 'Yes Bank';
            break;
        default:
            break;
    }

    return brandName;
}

export default importPartnerLogos;