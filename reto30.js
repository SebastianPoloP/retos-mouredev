/*
 * EJERCICIO:
 * Explora el "Principio SOLID de Inversión de Dependencias (Dependency Inversion
 * Principle, DIP)" y crea un ejemplo simple donde se muestre su funcionamiento 
 * de forma correcta e incorrecta.
 */

// Form incorrect
class Switch{
  turnOn(){
    console.log('Lamp on');
  }

  turnOff(){
    console.log('Lamp off')
  }
}

class Lamp {
  constructor(){
    this.switch = new Switch();
  }

  turnOn(){
    return this.switch.turnOn();
  }

  turnOff(){
    return this.switch.turnOff();
  }
}

// const lampara = new Lamp();
// lampara.turnOn();
// lampara.turnOff();

// Form correct

// Class "Interfaces"
class ISwitch{
  turnOn(){throw new Error('This method must be implement')}

  turnOff(){throw new Error('This method must be implement')}
}

// Class low level
class LampSwitch extends ISwitch{
  turnOn(){console.log('Lamp on')}

  turnOff(){console.log('Lamp off')}
}

class ButtonLampSwitch extends ISwitch{
  turnOn(){console.log('The button lamp is On')}
  turnOff(){console.log('The button lamp is off')}
}

// Class high level
class LampDIP {
  constructor(switchDip = new ISwitch()){
    this.switchDip = switchDip;
  }

  turnOn(){
    this.switchDip.turnOn();
  }

  turnOff(){
    this.switchDip.turnOff();
  }
}

//                       Dependency Inversion
const lamp = new LampDIP(new LampSwitch());
lamp.turnOn();
lamp.turnOff();

const lampButton = new LampDIP(new ButtonLampSwitch());
lampButton.turnOn();
lampButton.turnOff();

// const lampSinDip = new LampDIP();
// lampSinDip.turnOff();
// lampSinDip.turnOn();

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un sistema de notificaciones.
 * Requisitos:
 * 1. El sistema puede enviar Email, PUSH y SMS (implementaciones específicas).
 * 2. El sistema de notificaciones no puede depender de las implementaciones específicas.
 * Instrucciones:
 * 1. Crea la interfaz o clase abstracta.
 * 2. Desarrolla las implementaciones específicas.
 * 3. Crea el sistema de notificaciones usando el DIP.
 * 4. Desarrolla un código que compruebe que se cumple el principio.
 */

//Class "Interface"
class INotification{
  send(){throw new Error('This method must be implement')}
}

class NotificationEmail extends INotification{
  send(message){
    console.log('Send Email: ',message)
  }
}

class NotificationPush extends INotification{
  send(message){
    console.log('Send PUSH:', message)
  }
}

class NotificationSMS extends INotification{
  send(message){
    console.log('Send SMS:', message);
  }
}

class SystemNotification {
  constructor(notification = new INotification){
    this.notification = notification;
  }

  send(message){
    return this.notification.send(message)
  }
}

const notification = new SystemNotification();
// notification.send('hola');

const notificationSms = new SystemNotification(new NotificationSMS());
notificationSms.send('Hola!');

const notificationPush = new SystemNotification(new NotificationPush());
notificationPush.send('Notificacion de Facebook');

const notificationEmail = new SystemNotification(new NotificationEmail());
notificationEmail.send('Hola señor Sebastian');