import cv2

cap = cv2.VideoCapture(0)

######## Saving the camera video ###########

# DIVX, XVID, MJPG, X264, WMV1, WMV2
fourcc = cv2.VideoWriter_fourcc(*'XVID')

# it contains four parameters name. codec,fps,resolution.
outut = cv2.VideoWriter('output.avi',fourcc,20,(640,480))

while cap.isOpened():
    ret,frame = cap.read()
    if ret == True:
        # frame = cv2.resize(frame,(700,250))
        gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        cv2.imshow('frame',frame)
        # cv2.imshow('frame1',gray)
        outut.write(frame)
        k = cv2.waitKey(25)
        if k == ord('q'):
            break
cap.release()
outut.release()
cv2.destroyAllWindows()