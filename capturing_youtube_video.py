import cv2
import pafy

url = 'https://www.youtube.com/watch?v=HGoTIw-EiJg'

data = pafy.new(url)
data = data.getbest(preftype='mp4')

cap = cv2.VideoCapture(0)
cap.open(data.url)

while cap.isOpened():
    ret,frame = cap.read()
    if ret == True:
        cv2.resize(frame,(700,700))
        cv2.imshow('frame',frame)
        k = cv2.waitKey(20)
        if k == ord('q'):
            break
cap.release()
cv2.destroyAllWindows()
        