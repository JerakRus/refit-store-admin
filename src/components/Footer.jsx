import React from 'react'
import { Segment } from 'semantic-ui-react'

const colorText = {
        color: 'grey',
};

const Footer = (siteColor) => (
    <div>
        <Segment vertical/>
        <Segment vertical {...siteColor} textAlign='center'>
                <span style={colorText}> © 2019 Интернет-магазин мобильных аксессуаров и запчастей для мобильных устройств.
                        Сервисный центр Refit:Store. Копировальный центр. <br /> Адрес: МО, г. Мытищи, Олимпийский проспект,
                        д.34. Тел.: <b>8-999-989-99-47</b>. Электронная почта: <b>refitstore47@mail.ru</b>.
                </span>
        </Segment>
    </div>
);

export default Footer;