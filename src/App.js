import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React from 'react';
import Card from './component/Card'
import {useLocalStorage} from './hooks'



function App() {

  const [DOB, setDOB]=useLocalStorage('birthDate','')


  const [targetDate,setTargetDate]=React.useState(new Date().toISOString())

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="App">
        <div className="App-container">
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="fixed">DOB:</IonLabel>
              <IonDatetime displayFormat="DD MMM YYYY" value={DOB} onIonChange={(e)=>setDOB(e.detail.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel position="fixed">Target Date:</IonLabel>
              <IonDatetime displayFormat="DD MMM YYYY" value={targetDate} onIonChange={(e)=>setTargetDate(e.detail.value)}/>
            </IonItem>
            {DOB && <Card birthDate={DOB} targetDate={targetDate}/>}
            
          </IonContent>
        </div>
      </div>
    </IonApp>
  );
}

export default App;
