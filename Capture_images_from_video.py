import cv2

vidcap = cv2.VideoCapture(r'C:\Users\akaks\Videos\Avatar 2009 BRRip H264 5.1 ch Dual Audio [Hindi-Eng]~Dharmesh.mkv')

ret,frame = vidcap.read()
count = 0
while True:
    if ret == True:
        cv2.imwrite(r'C:\Users\akaks\Desktop\OpenCV\Frame\img%d.jpg'%count,frame)
        vidcap.set(cv2.CAP_PROP_POS_MSEC,(count**2))
        ret,frame = vidcap.read()
        cv2.imshow('res',frame)
        count += 1
        
        if cv2.waitKey(1) == ord('q'):
            break
            cv2.destroyAllWindows()
        
vidcap.release()
cv2.destroyAllWindows()