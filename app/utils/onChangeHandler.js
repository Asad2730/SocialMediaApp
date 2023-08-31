

export const HandleChange = (field,value,setFormValues) =>{

    setFormValues((pre)=>({
        ...pre,
        [field]:{...pre[field],value:value}
    }))
}