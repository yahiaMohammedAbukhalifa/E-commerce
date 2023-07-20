import React from 'react';
function Footer (){
    return(
        <>
            <footer>
                <h2>TownTeam official website</h2>
                <div className='keep-in-touch'>
                    <p>كن اول شخص يعرف بمنتجاتنا الجديدية </p>
                    <input type='email' placeholder='قم بكتابة الايميل الخاص بك' value={'example@example.com'}></input>
                    <input type='button' value='اضف حسابك' />
                </div>
                <div className="footer-container">
                    <div className='customer-service'>
                        <p>خدمة العملاء</p>
                        <a href='#'>الشروط و الأحكام</a>
                        <a href='#'>السياسة و الخصوصية</a>
                        <a href='#'>التسليم و الأرجاع</a>
                        <a href='#'>شروط الخدمة</a>
                    </div>
                    <div className='about'>
                        <p>عنا</p>
                        <a href='#'>من نحن </a>
                        <a href='#'>الفروع</a>
                        <a href='#'>كيفية الشراء</a>
                    </div>
                    <div className='contact'>
                        <p>التواصل</p>
                        <a href='#'>تواصل معنا</a>
                        <a href='#'>الخط الساخن</a>
                        <a href='#'>ايميل التواصل</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;