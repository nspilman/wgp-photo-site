from PIL import Image
from resizeimage import resizeimage
import os

def resizeImage(filepath,factor):
    try:
        image_raw = open(filepath,'r+b')
        image = Image.open(image_raw)
        width,height = image.size
        if ignoreTest(filepath) == False:
            resized_image = resizeimage.resize_width(image,width * factor)
            resized_image.save(filepath,image.format)
    except:
        pass

root = './images/photos_from_dan/clientLove/'

def ignoreTest(string):
    return "ignore" in string


photosFromDan = os.listdir(root)
# print(photosFromDan)
[resizeImage(root + photo,.35) for photo in photosFromDan]
