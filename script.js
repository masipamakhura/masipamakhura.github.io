function mPagination(){

    this.num = 4;
    this.pagination =  ()=>{

        let totalProjects = document.querySelectorAll('.grid__item');
        if(totalProjects.length > 0 && totalProjects !== null && totalProjects !== 'undefined'){
          totalProjects = totalProjects.length;
          return totalProjects;
        }
     },

     this.increment = ()=>{
        return ++this.num;
    },

    this.decrement = ()=>{
        return --this.num;
    },

};








window.addEventListener('load',()=>{

    var nextBtn = document.querySelector('.btn_next');
    var  prevBtn = document.querySelector('.btn_prev');
    const m = new mPagination();
    nextBtn.addEventListener('click',()=>{
       console.log(m.increment());

    });
    prevBtn.addEventListener('click',()=>{
        console.log(m.decrement());
    });

    
});