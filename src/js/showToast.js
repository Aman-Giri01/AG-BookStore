export function showToast(operation,id)
{
    const toast=document.createElement("div");
    toast.classList.add("toast");
    

    if(operation==="add")
    {
        toast.textContent=`Product with ID ${id} has been added`;

    }else if(operation=="delete")
    {
        toast.textContent=`Product with ID ${id} has been removed/cancelled.`;
    }
    else{
        toast.textContent=`Product is purchased Successfully.`;

    }

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },2000);

};