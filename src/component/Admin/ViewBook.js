import React from 'react'

function ViewBooks() {
  return (
    <div>
         <div style={{ backgroundImage: " url('https://cphlibrary.org/wp-content/themes/CPH/img/CPHL_Patterns_About.jpg')" }}>
        <h1>books in libarary</h1>
        <div className='row '>
                            <div class="card ms-2" style={{ width: " 18rem" }}>
                                
                                <img  src="https://www.dailyexcelsior.com/wp-content/uploads/2014/08/PGCC.jpg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> C book</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card ms-2" style={{ width: " 18rem" }}>
                                <img src="https://kbazar.s3.amazonaws.com/__sized__/products/programmingwithjava-thumbnail-540x540-70.jpeg" style={{ height: "200px" }} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Java Book</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                           </div>
      <br/><br/>
    </div>
      
    </div>
  )
}

export default ViewBooks
