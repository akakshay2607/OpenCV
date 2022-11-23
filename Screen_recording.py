from tkinter import Frame
import cv2
import pyautogui
import numpy as np
# create resolution
rs = pyautogui.size()

path = r'C:\Users\akaks\Desktop\OpenCV\hello.mp4'

# frame rate
fps = 20

fourcc = cv2.VideoWriter_fourcc(*'XVID')
output = cv2.VideoWriter(path,fourcc,fps,rs)

# create recording module
cv2.namedWindow('Live_Recording',cv2.WINDOW_NORMAL)
cv2.resizeWindow('Live_Recording',(600,400))

while True:
    img = pyautogui.screenshot()
    frame = np.array(img)
    frame = cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)
    output.write(frame)
    cv2.imshow('Live_Recording',frame)
    if cv2.waitKey(1) == ord('q'):
        break
    
output.release()
cv2.destroyAllWindows()
