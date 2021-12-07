function checkForVadility(msg, images) {
    let { type, name, textColor, content } = msg;
    let htmlRegExp = /<[^<>]+>/;
    let colorRegexp = /rgb\(\d{1,3}\, *\d{1,3}\, *\d{1,3}\)/;

    let isHaveAllProps = checkProps(msg);

    if( !isHaveAllProps ) return false;

    let typeIsValid = ( type == 'text' ) || ( type == 'sticker' );
    
    if( !typeIsValid ) return false;

    let nameIsValid = ( name != '' ) && ( !htmlRegExp.test(name) );
    
    if( !nameIsValid ) return false;

    let textColorIsValid = colorRegexp.test(textColor);
    
    if ( !textColorIsValid ) return false;

    let contentIsValid = checkContent(type, content, images);
    
    if( !contentIsValid ) return false;

    return true;
}


function checkContent(type, content, links) {
    let regExp = /<[^<>]+>/;
    let isValid;
    switch(type) {
        case 'text':
            isValid = !( regExp.test(content) );
            return isValid;
        case 'sticker': 
            isValid = !( regExp.test(content) ) && links.includes(content, 0);
            return isValid;
    }
}


function checkProps(msg) {
    return ( msg.hasOwnProperty('type')
            && msg.hasOwnProperty('name')
            && msg.hasOwnProperty('content')
            && msg.hasOwnProperty('textColor') );
}

module.exports = checkForVadility;