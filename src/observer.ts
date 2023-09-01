// Observer Pattern

export interface ObserverInterface {
  updateObserver(message: string): void;
} 

export interface ObserverSubject {
  addObserver(observer: ObserverInterface): void;
  removeObserver(observer: ObserverInterface): void;
  notifyObservers(message: string): void;
}