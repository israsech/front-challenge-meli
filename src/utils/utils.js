/**
 * Esta función genera un en base a las propiedades de un objeto js
 * un string con el formato de url params
 * ej: object{ edad:15,nombre:'Jual Lopez' } => return "edad=15&nombre=Juan Lopez"
 * @param object objeto a convertir
 */
export function objectToUrlParams (object){
    const queryString = Object.keys(object).filter(key => truthy(object[key])).map(key => key + '=' + object[key]).join('&');
    return queryString ?? '';
}
function truthy(value){
    return value || value === 0;
}
export function formatPrice(number){
    const numberFormat = new Intl.NumberFormat('de-DE');
    return numberFormat.format(number)
}
export function normalizeLabel(str){
    let standardLabel='';
    if(str){
        standardLabel = str.charAt(0).toUpperCase() + str.slice(1);
        standardLabel =standardLabel.replace(/_/g, ' ');
    }
    return standardLabel;
}