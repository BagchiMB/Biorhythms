import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import dayjs from 'dayjs';
import {calculateBiorhythms} from '../calculations'
import Chart from './Chart'
import './Card.css'


const formatDate = (isoString) =>
{
  return dayjs(isoString).format('DD MMM YYYY')
}

const Card = ({targetDate, birthDate}) => {
    const {physical,emotional,intellectual} =calculateBiorhythms(birthDate, targetDate)
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <Chart targetDate={targetDate} birthDate={birthDate}/>
                <br/>
                <p className="physical">Physical Level: {physical.toFixed(4)}</p>
                <p className="emotional">Emotional Level: {emotional.toFixed(4)}</p>
                <p className="intellectual">Intellectual Level: {intellectual.toFixed(4)}</p> 
            </IonCardContent>
        </IonCard>
    );
};

export default Card;