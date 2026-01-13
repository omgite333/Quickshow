const timeFormat =(minutes)=>{
    const houres =Math.floor(minutes/60);
    const minutesRemainder = minutes % 60;
    return `${houres}h ${minutesRemainder}m`;
}

export default timeFormat;