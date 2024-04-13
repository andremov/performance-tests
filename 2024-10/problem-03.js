function maxArea(height) {
    biggerarea2=0
    l = 0
    r = height.length-1
    while (l!=r){
        h = height[l]<height[r]?height[l]:height[r]
        area = (r-l)*h
        if (area>biggerarea2){
            biggerarea2 = area
        }
        if (height[l]>height[r]){
            r-=1
        }
        else{
            l+=1
        }
    }
    return biggerarea2
}
