import cv2

cap = cv2.VideoCapture(r'C:\Users\akaks\Videos\Avatar 2009 BRRip H264 5.1 ch Dual Audio [Hindi-Eng]~Dharmesh.mkv')

while True:
    ret,frame = cap.read()
    frame = cv2.resize(frame,(700,250))
    
    cv2.imshow('frame',frame)
