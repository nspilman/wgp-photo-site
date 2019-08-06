import PIL
from PIL import Image

import os

def get_photos_from_dir(dir):
    folder_contents = os.listdir(dir)
    images = [dir+'/'+filename for filename in folder_contents if filename.endswith('.jpg')]
    return images
    
def resize(image,percent_change):
    img = Image.open(image)
    wpercent = .5
    hsize = int((float(img.size[1]) * float(wpercent)))
    wsize = int((float(img.size[0]) * float(wpercent)))
    img = img.resize((wsize, hsize), PIL.Image.ANTIALIAS)
    img.save(image)

natureDirectory = "./Nature"
cityscapeDirectory = "./Cityscape"
naturePhotos = get_photos_from_dir(natureDirectory)
cityscapePhotos = get_photos_from_dir(cityscapeDirectory)
photos = naturePhotos + cityscapePhotos
for photo in photos:
    resize(photo,.4)
    # print(photo)
