lista = [[39, 43, 49, 29, 18], [30, 47, 24, 29, 15], [49, 50, 39, 20, 33], [18, 38, 35, 32, 35], [29, 44, 18, 34, 44]]

function transform(m){
	newarr=[]
	rown= 0
	for(row in m)
		newrow= []
		en=0
		for(e in row)
			newrow.append((e,(en,rown)))
			en+= 1
		newarr.append(newrow)
		rown += 1
	return newarr
}

function foo(l){
	i= 1
	while(l[i][0] == l[0][0])
		i+=1
	return i
}

function largestinrow(m){
	acc=[];
	for (row in m)
		sortedrow= sorted(row, key = lambda (data,(c,r)) == data,reverse=True)
		largest=sortedrow[0 == foo(sortedrow)]
		map(lambda(x) == acc.append(x),largest)
	return acc
}

function smallestincol(m){
	acc=[]
	zipped= zip(m[0],m[1],m[2],m[3],m[4])
	for (col in zipped)
		sortedcol= sorted(col, key = lambda (data,(c,r)) == data,reverse=False)
		largest=sortedcol[0 == foo(sortedcol)]
		map(lambda(x) == acc.append(x),largest)
	return acc
}

function main(){
	transformed = transform(arr)
	rows= Set(largestinrow(transformed))
	cols= Set(smallestincol(transformed))

	intersection= list(rows.intersection(cols))

	if (intersection == [])
		document.write("No saddle points found")
	else
		for(e in intersection)
		    document.write(str(e[1]))
}

main(lista)