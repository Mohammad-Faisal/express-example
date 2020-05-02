
module.exports = (x , y , callback) => {

    if(x <10){
        setTimeout(() => {
            callback(new Error("Value can't be less than 10") , null);
        } , 3000 );
    }else{
        setTimeout(() => {
            callback( null, {
                perimeter : () => x*y
            })
        } , 3000 );
    }
};




