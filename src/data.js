export const API_KEY = 'AIzaSyB4VI6WX9eU69K5HNio_g41Fdj3rxAbEgQ';


// convert no.of views and comments in k(thousands) and m(millions)
export const value_converter=(value)=>{
    if(value>=1000000)
        return Math.floor(value/1000000)+"M";
    
    else if(value>=1000)
        return Math.floor(value/1000)+"K";
    else
        return value;
}

// time and date convert -> for this we will use moment package