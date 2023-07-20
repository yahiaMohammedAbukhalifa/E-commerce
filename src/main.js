import React from 'react';

const Main = () =>{
    return(
        <div className='main'>
            <div className='main-img'>
                <img src={process.env.PUBLIC_URL + '/main.png'} alt=""/>
            </div>
            <div className='main-info'>
                <h1>احصل على افضل الملابس واقل الاسعار</h1>
                <p>الموقع الرسمي</p>
                <a className='main-btn' style={{color: 'white'}}>تصفح منتجاتنا</a>
            </div>
        </div>
    )
}
export default Main ;