import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import GoogleMap from './GoogleMap';

const Contacts = () => {
    return (
        <Container text textAlign='left'>
            <Header as='h3'>Контактная информация:</Header>
            <p>
                <b>Мы находимся:</b> Московская обл., г.Мытищи, Олимпийский пр-т., д.34, 141006
                <br /><br />
                <b>Время работы:</b><br />
                Понедельник: 10:00–20:00<br />
                Вторник: 10:00–20:00<br />
                Среда: 10:00–20:00<br />
                Четверг: 10:00–20:00<br />
                Пятница: 10:00–20:00<br />
                Cуббота: 10:00–20:00<br />
                Воскресенье: 10:00–18:00<br />
                <br />
                <b>Телефон:</b> 8 (999) 989-99-47<br />
                <b>Электронная почта:</b> &nbsp;refitstore47@mail.ru
            </p>
            <GoogleMap />
        </Container>
    );
};

export default Contacts;