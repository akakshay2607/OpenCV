import cv2
import datetime

cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret,frame = cap.read()
    if ret == True:
        text = "Hello This is Akshay"
        font = cv2.FONT_ITALIC
        cv2.putText(frame,text,(10,20),font,1,(168, 50, 52),1,cv2.LINE_AA)
        date_text = str(datetime.datetime.now())
        cv2.putText(frame,date_text,(20,50),font,1,(171, 159, 159),1,cv2.LINE_AA)
        cv2.imshow('frame',frame)
        if cv2.waitKey(30) == ord('q'):
            break
        
cap.release()
cv2.destroyAllWindows()
        