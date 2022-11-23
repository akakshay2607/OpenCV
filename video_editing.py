import cv2
import numpy as np
import modules as md

# reading the video   
cap = cv2.VideoCapture('1.mp4')

# Getting fps count
fps = cap.get(cv2.CAP_PROP_FPS)

count= 0
# to write the output image
output = cv2.VideoWriter('filename.avi', 
                         cv2.VideoWriter_fourcc(*'MJPG'),
                         30, (500,300))
doc = [['Welcome to the neubrain'],['Neubrain solution is one of the leading marketing & strategizing company, based in Mumbai.'],
       ['We help you discover opportunities you may never have imagined and achieve results that will take your company to another level'],['Neubrain solution can help you to be a recognizable face by granting you a strong digital presence in the internet world.'],['Our team is filled with the talent and skills of expert strategists, qualified marketers and prolific developers.']]

while True:
    ret,frame = cap.read()
    frame = cv2.resize(frame,(500,300),fx=0,fy=0, interpolation=cv2.INTER_CUBIC)
    font = cv2.FONT_HERSHEY_COMPLEX_SMALL
    gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    ret,thresh = cv2.threshold(gray,250,255,0)
    cnts,hier = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    large_cntr = max(cnts,key=cv2.contourArea)
    x,y,w,h = cv2.boundingRect(large_cntr)
    cv2.drawContours(frame, [large_cntr], -1, (255, 255, 255), -1)
    
    text = 'How are you'
    if (count > 0.7*fps)and (count <=2.8*fps):
        cv2.putText(frame,text,(175,190),font,1,(512, 512, 512),1,cv2.LINE_AA) 
          
    elif (count > 3.9*fps) and (count <= 6.8*fps):
        scale = md.get_fontscale(h)
        letters = md.get_letters(scale,h)
        sent = md.create_sentences(doc[0][0],letters)
        for line_no in range(len(sent)):
            start_x = (x+20) + 3*line_no
            start_y = y + 60 + 25*(len(sent) + line_no)
            location = (start_x,start_y)
            cv2.putText(frame,sent[line_no],location,font,scale,(191, 23, 11),1,cv2.LINE_AA)
            
    elif (count > 6.8*fps) and (count <= 10.8*fps):
        scale = md.get_fontscale(h)
        letters = md.get_letters(scale,h)
        sent = md.create_sentences(doc[1][0],letters)
        for line_no in range(len(sent)):
            start_x = (x+20) + 3*line_no
            start_y = (y+50) + 25*line_no
            location = (start_x,start_y)
            cv2.putText(frame,sent[line_no],location,font, scale,(191, 23, 11),1,cv2.LINE_AA)
            
    elif (count > 15*fps) and (count <= 18.5*fps):
        scale = md.get_fontscale(h)
        letters = md.get_letters(scale,h)
        sent = md.create_sentences(doc[2][0],letters)
        for line_no in range(len(sent)):
            start_x = (x+20) + 3*line_no
            start_y = (y+50) + 25*line_no
            location = (start_x,start_y)
            cv2.putText(frame,sent[line_no],location,font, scale,(191, 23, 11),1,cv2.LINE_AA)
            
    elif (count > 18.5*fps) and (count <= 26*fps):
        scale = md.get_fontscale(500)
        letters = md.get_letters(scale,500)
        sent = md.create_sentences(doc[3][0],30)
        for line_no in range(len(sent)):
            start_x = (x+20) + 3*line_no
            start_y = (y+50) + 35*line_no
            location = (start_x,start_y)
            cv2.putText(frame,sent[line_no],location,font, 0.8,(191, 23, 11),1,cv2.LINE_AA)
        
        
        
    count += 1
    output.write(frame)
    cv2.imshow('frame', frame)
    if cv2.waitKey(30) == ord('q'):
            break



cap.release()
output.release()
cv2.destroyAllWindows()   