import cv2
import numpy as np
import modules as md

img = np.ones([800,1200,3],np.uint8)*255
text = 'Hello How are you Hello How are you Hello How are you Hello How are you Hello How are you Hello How are you'
scale = md.get_fontscale(img.shape[1])
letters = md.get_letters(scale,img.shape[1])
sent = md.create_sentences(text,letters)
for line_no in range(len(sent)):
            start_x = 20 + 3*line_no
            start_y = 50 + 35*line_no
            location = (start_x,start_y)
            cv2.putText(img,sent[line_no],location,cv2.FONT_HERSHEY_COMPLEX, scale,(191, 23, 11),1,cv2.LINE_AA)

cv2.imshow('img',img)
cv2.waitKey(0)
cv2.destroyAllWindows()