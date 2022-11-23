import cv2
img = '1.jpg'
img = cv2.imread(img)
img = cv2.resize(img,(400,400))
cv2.imshow("img",img)

#Now try to split an image
b,g,r = cv2.split(img)
cv2.imshow('b',b)
cv2.imshow('g',g)
cv2.imshow('r',r)

#Now if you want to mix the the channels then use merge
rbg = cv2.merge((r,g,b))
cv2.imshow('rgb',rbg)


#access a pixel value by its row and column coordinates.
px = img[520,580] #store cordinate in variable
print("the pixel of that co-ordinates==",px) #we get the pixel value

#Now try to find selected channel value from cordinate
#We know we have three channel -   0,1,2
# accessing only blue pixel
blue = img[520,580,0]
print("the pixel having blue color==",blue)

grn = img[520,580,1] #for green pass 1
print("the pixel having grn color==",grn)
red = img[520,580,2] #for red pass 2
print("the pixel having red color==",red)
cv2.waitKey(0)   
cv2.destroyAllWindows()