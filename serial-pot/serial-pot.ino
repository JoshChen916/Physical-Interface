const int potPin = A0;
int potVal;
void setup() {
  Serial.begin(9600); // initialize serial communications
}
 
void loop() {
  // read the input pin:
  potVal = analogRead(A0);                  
  // remap the pot value to fit in 1 byte:
  int mappedPot = map(potVal, 0, 1023, 0, 255); 
  // print it out the serial port:
  Serial.println(mappedPot);                             
delay(10);                                        
}
