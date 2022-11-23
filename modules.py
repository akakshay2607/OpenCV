def create_sentences(text,letters):
    sentences = []
    for cnt,letter in enumerate(text):
            sentence = text[:letters]
            sentences.append(sentence)
            text = text[letters:]
            if len(text) < letters:
                sentences.append(text)
                break
    return sentences

def get_fontscale(width):
    if (width >=200) and (width<220):
        fontscale = 0.6
    elif (width >=220) and (width<230):
        fontscale = 0.6
    elif (width >=230) and (width<240):
        fontscale = 0.65
    elif (width >=240) and (width<250):
        fontscale = 0.7
    elif (width >=250) and (width<260):
        fontscale = 0.72
    elif (width >=260) and (width<270):
        fontscale = 0.73
    elif (width >=270) and (width<280):
        fontscale = 0.75
    elif (width >=280) and (width<290):
        fontscale = 0.79
    elif (width >=290) and (width<300):
        fontscale = 0.82
    elif (width >=300) and (width<350):
        fontscale = 0.87
    else:
        fontscale = 0.8
    return fontscale

def get_letters(fontscale,width):
    if (fontscale >= 0.5) and(fontscale <= 0.55):
        letters = int(width / 10.58)   
    elif (fontscale > 0.55) and(fontscale <= 0.6):
        letters = int(width/11.9)       
    elif (fontscale > 0.6) and(fontscale <= 0.65):
        letters = int(width/12.12)        
    elif (fontscale > 0.65) and(fontscale <= 0.7):
        letters = int(width/13.52)    
    elif (fontscale > 0.7) and(fontscale <= 0.75):
        letters = int(width/14.12)
    elif (fontscale > 0.75) and(fontscale <= 0.8):
        letters = int(width/15.88)   
    elif (fontscale > 0.8):
        letters = int(width/16.16)
    return letters 