/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Color = function(device, int, int, int){
	this.handle = [new Number()];
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Color.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Color.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Color.prototype.hashCode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Color.prototype.isDisposed = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.RGB}
 */
org.eclipse.swt.graphics.Color.prototype.getRGB = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Color.prototype.getBlue = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Color.prototype.getGreen = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Color.prototype.getRed = function(){
};

/**
 */
org.eclipse.swt.graphics.Color.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Color.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Color.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Color.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Color.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Color.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Color.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Color.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {org.eclipse.swt.graphics.ImageData} imageData
 * @param {org.eclipse.swt.graphics.ImageData} imageData
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Cursor = function(device, imageData, imageData, int, int){
	this.handle = new org.eclipse.swt.internal.cocoa.NSCursor();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Cursor.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Cursor.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Cursor.prototype.hashCode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Cursor.prototype.isDisposed = function(){
};

/**
 */
org.eclipse.swt.graphics.Cursor.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Cursor.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Cursor.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Cursor.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Cursor.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Cursor.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Cursor.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Cursor.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.DeviceData} deviceData
 */
org.eclipse.swt.graphics.Device = function(deviceData){
	return this;
}

org.eclipse.swt.graphics.Device.DEBUG = new Boolean();


/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Device.prototype.isDisposed = function(){
};

/**
 */
org.eclipse.swt.graphics.Device.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.Device.prototype.getBounds = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Font}
 */
org.eclipse.swt.graphics.Device.prototype.getSystemFont = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.Device.prototype.getClientArea = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Point}
 */
org.eclipse.swt.graphics.Device.prototype.getDPI = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Device.prototype.getDepth = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.DeviceData}
 */
org.eclipse.swt.graphics.Device.prototype.getDeviceData = function(){
};

/**
 * @param {java.lang.String} string
 * @param {Boolean} boolean
 * @returns {org.eclipse.swt.graphics.FontData[]}
 */
org.eclipse.swt.graphics.Device.prototype.getFontList = function(string, boolean){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.Color}
 */
org.eclipse.swt.graphics.Device.prototype.getSystemColor = function(int){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Device.prototype.getWarnings = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Device.prototype.loadFont = function(string){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.Device.prototype.setWarnings = function(boolean){
};

/**
 */
org.eclipse.swt.graphics.Device.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Device.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Device.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Device.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Device.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Device.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Device.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Device.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Device.prototype.notifyAll = function(){
};

/**
 * @constructor
 */
org.eclipse.swt.graphics.DeviceData = function(){
	this.debug = new Boolean();
	this.tracking = new Boolean();
	this.errors = [new java.lang.Error()];
	this.objects = [new java.lang.Object()];
	return this;
}



/**
 */
org.eclipse.swt.graphics.DeviceData.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.DeviceData.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.DeviceData.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.DeviceData.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.DeviceData.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.DeviceData.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.DeviceData.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.DeviceData.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.DeviceData.prototype.notifyAll = function(){
};





/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Font = function(device, string, int, int){
	this.handle = new org.eclipse.swt.internal.cocoa.NSFont();
	this.extraTraits = new Number();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Font.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Font.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Font.prototype.hashCode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Font.prototype.isDisposed = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.FontData[]}
 */
org.eclipse.swt.graphics.Font.prototype.getFontData = function(){
};

/**
 */
org.eclipse.swt.graphics.Font.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Font.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Font.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Font.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Font.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Font.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Font.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Font.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.FontData = function(string, int, int){
	this.name = new java.lang.String();
	this.height = new Number();
	this.style = new Number();
	this.nsName = new java.lang.String();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.FontData.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.FontData.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontData.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.FontData.prototype.getName = function(){
};

/**
 * @param {java.lang.String} string
 */
org.eclipse.swt.graphics.FontData.prototype.setName = function(string){
};

/**
 * @param {java.lang.String} string
 */
org.eclipse.swt.graphics.FontData.prototype.setLocale = function(string){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontData.prototype.getStyle = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontData.prototype.getHeight = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.FontData.prototype.getLocale = function(){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.FontData.prototype.setHeight = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.FontData.prototype.setStyle = function(int){
};

/**
 */
org.eclipse.swt.graphics.FontData.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.FontData.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.FontData.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.FontData.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.FontData.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.FontData.prototype.notifyAll = function(){
};




/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.hashCode = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.getHeight = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.getAscent = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.getDescent = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.getAverageCharWidth = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.getLeading = function(){
};

/**
 */
org.eclipse.swt.graphics.FontMetrics.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.FontMetrics.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.FontMetrics.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.FontMetrics.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.FontMetrics.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.FontMetrics.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Drawable} drawable
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC = function(drawable, int){
	this.handle = new org.eclipse.swt.internal.cocoa.NSGraphicsContext();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GC.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.GC.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.hashCode = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Font}
 */
org.eclipse.swt.graphics.GC.prototype.getFont = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getStyle = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GC.prototype.isDisposed = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Font} font
 */
org.eclipse.swt.graphics.GC.prototype.setFont = function(font){
};

/**
 * @param {org.eclipse.swt.graphics.Color} color
 */
org.eclipse.swt.graphics.GC.prototype.setForeground = function(color){
};

/**
 * @returns {org.eclipse.swt.graphics.Color}
 */
org.eclipse.swt.graphics.GC.prototype.getBackground = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Color}
 */
org.eclipse.swt.graphics.GC.prototype.getForeground = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Color} color
 */
org.eclipse.swt.graphics.GC.prototype.setBackground = function(color){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.Point}
 */
org.eclipse.swt.graphics.GC.prototype.textExtent = function(string, int){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.swt.graphics.Point}
 */
org.eclipse.swt.graphics.GC.prototype.textExtent = function(string){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.fillRectangle = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.GC.prototype.fillRectangle = function(rectangle){
};

/**
 * @returns {org.eclipse.swt.graphics.GCData}
 */
org.eclipse.swt.graphics.GC.prototype.getGCData = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Image} image
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawImage = function(image, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Image} image
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawImage = function(image, int, int, int, int, int, int, int, int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setAlpha = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.Image} image
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.copyArea = function(image, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.copyArea = function(int, int, int, int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.GC.prototype.copyArea = function(int, int, int, int, int, int, boolean){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawArc = function(int, int, int, int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawFocus = function(int, int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawLine = function(int, int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawOval = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Path} path
 */
org.eclipse.swt.graphics.GC.prototype.drawPath = function(path){
};

/**
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawPoint = function(int, int){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.GC.prototype.drawPolygon = function(ints){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.GC.prototype.drawPolyline = function(ints){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawRectangle = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.GC.prototype.drawRectangle = function(rectangle){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawRoundRectangle = function(int, int, int, int, int, int){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.GC.prototype.drawString = function(string, int, int, boolean){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawString = function(string, int, int){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawText = function(string, int, int, int){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.drawText = function(string, int, int){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 * @param {Number} int
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.GC.prototype.drawText = function(string, int, int, boolean){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.fillArc = function(int, int, int, int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.GC.prototype.fillGradientRectangle = function(int, int, int, int, boolean){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.fillOval = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Path} path
 */
org.eclipse.swt.graphics.GC.prototype.fillPath = function(path){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.GC.prototype.fillPolygon = function(ints){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.fillRoundRectangle = function(int, int, int, int, int, int){
};

/**
 * @param {char} char
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getAdvanceWidth = function(char){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GC.prototype.getAdvanced = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getAlpha = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getAntialias = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Pattern}
 */
org.eclipse.swt.graphics.GC.prototype.getBackgroundPattern = function(){
};

/**
 * @param {char} char
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getCharWidth = function(char){
};

/**
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.GC.prototype.getClipping = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Region} region
 */
org.eclipse.swt.graphics.GC.prototype.getClipping = function(region){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getFillRule = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.FontMetrics}
 */
org.eclipse.swt.graphics.GC.prototype.getFontMetrics = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Pattern}
 */
org.eclipse.swt.graphics.GC.prototype.getForegroundPattern = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getInterpolation = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.LineAttributes}
 */
org.eclipse.swt.graphics.GC.prototype.getLineAttributes = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getLineCap = function(){
};

/**
 * @returns {int[]}
 */
org.eclipse.swt.graphics.GC.prototype.getLineDash = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getLineJoin = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getLineStyle = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getLineWidth = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GC.prototype.getTextAntialias = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Transform} transform
 */
org.eclipse.swt.graphics.GC.prototype.getTransform = function(transform){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GC.prototype.getXORMode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GC.prototype.isClipped = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.GC.prototype.setAdvanced = function(boolean){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setAntialias = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.Pattern} pattern
 */
org.eclipse.swt.graphics.GC.prototype.setBackgroundPattern = function(pattern){
};

/**
 * @param {org.eclipse.swt.graphics.Region} region
 */
org.eclipse.swt.graphics.GC.prototype.setClipping = function(region){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.GC.prototype.setClipping = function(rectangle){
};

/**
 * @param {org.eclipse.swt.graphics.Path} path
 */
org.eclipse.swt.graphics.GC.prototype.setClipping = function(path){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setClipping = function(int, int, int, int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setFillRule = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.Pattern} pattern
 */
org.eclipse.swt.graphics.GC.prototype.setForegroundPattern = function(pattern){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setInterpolation = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.LineAttributes} lineAttributes
 */
org.eclipse.swt.graphics.GC.prototype.setLineAttributes = function(lineAttributes){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setLineCap = function(int){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.GC.prototype.setLineDash = function(ints){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setLineJoin = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setLineStyle = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setLineWidth = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.setTextAntialias = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.Transform} transform
 */
org.eclipse.swt.graphics.GC.prototype.setTransform = function(transform){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.GC.prototype.setXORMode = function(boolean){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.swt.graphics.Point}
 */
org.eclipse.swt.graphics.GC.prototype.stringExtent = function(string){
};

/**
 */
org.eclipse.swt.graphics.GC.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.GC.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.GC.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.GC.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.GC.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.GC.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.GC.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.GC.prototype.notifyAll = function(){
};

/**
 * @constructor
 */
org.eclipse.swt.graphics.GCData = function(){
	this.device = new org.eclipse.swt.graphics.Device();
	this.style = new Number();
	this.state = new Number();
	this.foreground = [new Number()];
	this.background = [new Number()];
	this.foregroundPattern = new org.eclipse.swt.graphics.Pattern();
	this.backgroundPattern = new org.eclipse.swt.graphics.Pattern();
	this.font = new org.eclipse.swt.graphics.Font();
	this.alpha = new Number();
	this.lineWidth = new Number();
	this.lineStyle = new Number();
	this.lineCap = new Number();
	this.lineJoin = new Number();
	this.lineDashesOffset = new Number();
	this.lineDashes = [new Number()];
	this.lineMiterLimit = new Number();
	this.xorMode = new Boolean();
	this.antialias = new Number();
	this.textAntialias = new Number();
	this.fillRule = new Number();
	this.image = new org.eclipse.swt.graphics.Image();
	this.textStorage = new org.eclipse.swt.internal.cocoa.NSTextStorage();
	this.layoutManager = new org.eclipse.swt.internal.cocoa.NSLayoutManager();
	this.textContainer = new org.eclipse.swt.internal.cocoa.NSTextContainer();
	this.fg = new org.eclipse.swt.internal.cocoa.NSColor();
	this.bg = new org.eclipse.swt.internal.cocoa.NSColor();
	this.drawXOffset = new Number();
	this.drawYOffset = new Number();
	this.paintRect = new org.eclipse.swt.internal.cocoa.NSRect();
	this.path = new org.eclipse.swt.internal.cocoa.NSBezierPath();
	this.transform = new org.eclipse.swt.internal.cocoa.NSAffineTransform();
	this.inverseTransform = new org.eclipse.swt.internal.cocoa.NSAffineTransform();
	this.clipPath = new org.eclipse.swt.internal.cocoa.NSBezierPath();
	this.visiblePath = new org.eclipse.swt.internal.cocoa.NSBezierPath();
	this.visibleRgn = new Number();
	this.view = new org.eclipse.swt.internal.cocoa.NSView();
	this.size = new org.eclipse.swt.internal.cocoa.NSSize();
	this.thread = new java.lang.Thread();
	this.flippedContext = new org.eclipse.swt.internal.cocoa.NSGraphicsContext();
	this.restoreContext = new Boolean();
	return this;
}



/**
 */
org.eclipse.swt.graphics.GCData.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.GCData.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.GCData.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GCData.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.GCData.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GCData.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.GCData.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.GCData.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.GCData.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.GlyphMetrics = function(int, int, int){
	this.ascent = new Number();
	this.descent = new Number();
	this.width = new Number();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.hashCode = function(){
};

/**
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.GlyphMetrics.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {org.eclipse.swt.graphics.ImageData} imageData
 * @param {org.eclipse.swt.graphics.ImageData} imageData
 */
org.eclipse.swt.graphics.Image = function(device, imageData, imageData){
	this.type = new Number();
	this.handle = new org.eclipse.swt.internal.cocoa.NSImage();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Image.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Image.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Image.prototype.hashCode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Image.prototype.isDisposed = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Color}
 */
org.eclipse.swt.graphics.Image.prototype.getBackground = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.Image.prototype.getBounds = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Color} color
 */
org.eclipse.swt.graphics.Image.prototype.setBackground = function(color){
};

/**
 * @returns {org.eclipse.swt.graphics.ImageData}
 */
org.eclipse.swt.graphics.Image.prototype.getImageData = function(){
};

/**
 */
org.eclipse.swt.graphics.Image.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Image.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Image.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Image.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Image.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Image.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Image.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Image.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {org.eclipse.swt.graphics.PaletteData} paletteData
 * @param {Number} int
 * @param {byte[]} bytes
 */
org.eclipse.swt.graphics.ImageData = function(int, int, int, paletteData, int, bytes){
	this.width = new Number();
	this.height = new Number();
	this.depth = new Number();
	this.scanlinePad = new Number();
	this.bytesPerLine = new Number();
	this.data = [new byte()];
	this.palette = new org.eclipse.swt.graphics.PaletteData();
	this.transparentPixel = new Number();
	this.maskData = [new byte()];
	this.maskPad = new Number();
	this.alphaData = [new byte()];
	this.alpha = new Number();
	this.type = new Number();
	this.x = new Number();
	this.y = new Number();
	this.disposalMethod = new Number();
	this.delayTime = new Number();
	return this;
}



/**
 * @returns {java.lang.Object}
 */
org.eclipse.swt.graphics.ImageData.prototype.clone = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.RGB[]}
 */
org.eclipse.swt.graphics.ImageData.prototype.getRGBs = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.ImageData}
 */
org.eclipse.swt.graphics.ImageData.prototype.getTransparencyMask = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageData.prototype.getTransparencyType = function(){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.setAlpha = function(int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageData.prototype.getAlpha = function(int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageData.prototype.getPixel = function(int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {byte[]} bytes
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.getAlphas = function(int, int, int, bytes, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {int[]} ints
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.getPixels = function(int, int, int, ints, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {byte[]} bytes
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.getPixels = function(int, int, int, bytes, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.ImageData}
 */
org.eclipse.swt.graphics.ImageData.prototype.scaledTo = function(int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {byte[]} bytes
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.setAlphas = function(int, int, int, bytes, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.setPixel = function(int, int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {int[]} ints
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.setPixels = function(int, int, int, ints, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {byte[]} bytes
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.setPixels = function(int, int, int, bytes, int){
};

/**
 */
org.eclipse.swt.graphics.ImageData.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.ImageData.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageData.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.ImageData.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.ImageData.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageData.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.ImageData.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageData.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageData.prototype.notifyAll = function(){
};



/**
 * @param {java.io.InputStream} inputStream
 * @returns {org.eclipse.swt.graphics.ImageData[]}
*/
org.eclipse.swt.graphics.ImageDataLoader.load = function(inputStream){
}

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.swt.graphics.ImageData[]}
*/
org.eclipse.swt.graphics.ImageDataLoader.load = function(string){
}

/**
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageDataLoader.prototype.notifyAll = function(){
};

/**
 * @constructor
 */
org.eclipse.swt.graphics.ImageLoader = function(){
	this.data = [new org.eclipse.swt.graphics.ImageData()];
	this.logicalScreenWidth = new Number();
	this.logicalScreenHeight = new Number();
	this.backgroundPixel = new Number();
	this.repeatCount = new Number();
	this.compression = new Number();
	return this;
}



/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.swt.graphics.ImageData[]}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.load = function(string){
};

/**
 * @param {java.io.InputStream} inputStream
 * @returns {org.eclipse.swt.graphics.ImageData[]}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.load = function(inputStream){
};

/**
 * @param {java.lang.String} string
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageLoader.prototype.save = function(string, int){
};

/**
 * @param {java.io.OutputStream} outputStream
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageLoader.prototype.save = function(outputStream, int){
};

/**
 * @param {org.eclipse.swt.graphics.ImageLoaderEvent} imageLoaderEvent
 */
org.eclipse.swt.graphics.ImageLoader.prototype.notifyListeners = function(imageLoaderEvent){
};

/**
 * @param {org.eclipse.swt.graphics.ImageLoaderListener} imageLoaderListener
 */
org.eclipse.swt.graphics.ImageLoader.prototype.addImageLoaderListener = function(imageLoaderListener){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.hasListeners = function(){
};

/**
 * @param {org.eclipse.swt.graphics.ImageLoaderListener} imageLoaderListener
 */
org.eclipse.swt.graphics.ImageLoader.prototype.removeImageLoaderListener = function(imageLoaderListener){
};

/**
 */
org.eclipse.swt.graphics.ImageLoader.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.ImageLoader.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageLoader.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.ImageLoader.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageLoader.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageLoader.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.ImageLoader} imageLoader
 * @param {org.eclipse.swt.graphics.ImageData} imageData
 * @param {Number} int
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.ImageLoaderEvent = function(imageLoader, imageData, int, boolean){
	this.imageData = new org.eclipse.swt.graphics.ImageData();
	this.incrementCount = new Number();
	this.endOfImage = new Boolean();
	return this;
}



/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.toString = function(){
};

/**
 * @returns {java.lang.Object}
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.getSource = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.equals = function(object){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.ImageLoaderEvent.prototype.notifyAll = function(){
};




/**
 * @param {org.eclipse.swt.graphics.ImageLoaderEvent} imageLoaderEvent
 */
org.eclipse.swt.graphics.ImageLoaderListener.prototype.imageDataLoaded = function(imageLoaderEvent){
};

/**
 * @constructor
 * @param {Number} float
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {float[]} floats
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.LineAttributes = function(float, int, int, int, floats, float, float){
	this.width = new Number();
	this.style = new Number();
	this.cap = new Number();
	this.join = new Number();
	this.dash = [new Number()];
	this.dashOffset = new Number();
	this.miterLimit = new Number();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.LineAttributes.prototype.equals = function(object){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.LineAttributes.prototype.hashCode = function(){
};

/**
 */
org.eclipse.swt.graphics.LineAttributes.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.LineAttributes.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.LineAttributes.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.LineAttributes.prototype.toString = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.LineAttributes.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.LineAttributes.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.LineAttributes.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.PaletteData = function(int, int, int){
	this.isDirect = new Boolean();
	this.colors = [new org.eclipse.swt.graphics.RGB()];
	this.redMask = new Number();
	this.greenMask = new Number();
	this.blueMask = new Number();
	this.redShift = new Number();
	this.greenShift = new Number();
	this.blueShift = new Number();
	return this;
}



/**
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.RGB}
 */
org.eclipse.swt.graphics.PaletteData.prototype.getRGB = function(int){
};

/**
 * @returns {org.eclipse.swt.graphics.RGB[]}
 */
org.eclipse.swt.graphics.PaletteData.prototype.getRGBs = function(){
};

/**
 * @param {org.eclipse.swt.graphics.RGB} rGB
 * @returns {Number}
 */
org.eclipse.swt.graphics.PaletteData.prototype.getPixel = function(rGB){
};

/**
 */
org.eclipse.swt.graphics.PaletteData.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.PaletteData.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.PaletteData.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.PaletteData.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.PaletteData.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.PaletteData.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.PaletteData.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.PaletteData.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.PaletteData.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {org.eclipse.swt.graphics.Path} path
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path = function(device, path, float){
	this.handle = new org.eclipse.swt.internal.cocoa.NSBezierPath();
	return this;
}



/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Path.prototype.toString = function(){
};

/**
 * @param {Number} float
 * @param {Number} float
 * @param {org.eclipse.swt.graphics.GC} gC
 * @param {Boolean} boolean
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Path.prototype.contains = function(float, float, gC, boolean){
};

/**
 */
org.eclipse.swt.graphics.Path.prototype.close = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Path.prototype.isDisposed = function(){
};

/**
 * @param {float[]} floats
 */
org.eclipse.swt.graphics.Path.prototype.getBounds = function(floats){
};

/**
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path.prototype.addArc = function(float, float, float, float, float, float){
};

/**
 * @param {org.eclipse.swt.graphics.Path} path
 */
org.eclipse.swt.graphics.Path.prototype.addPath = function(path){
};

/**
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path.prototype.addRectangle = function(float, float, float, float){
};

/**
 * @param {java.lang.String} string
 * @param {Number} float
 * @param {Number} float
 * @param {org.eclipse.swt.graphics.Font} font
 */
org.eclipse.swt.graphics.Path.prototype.addString = function(string, float, float, font){
};

/**
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path.prototype.cubicTo = function(float, float, float, float, float, float){
};

/**
 * @param {float[]} floats
 */
org.eclipse.swt.graphics.Path.prototype.getCurrentPoint = function(floats){
};

/**
 * @returns {org.eclipse.swt.graphics.PathData}
 */
org.eclipse.swt.graphics.Path.prototype.getPathData = function(){
};

/**
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path.prototype.lineTo = function(float, float){
};

/**
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path.prototype.moveTo = function(float, float){
};

/**
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Path.prototype.quadTo = function(float, float, float, float){
};

/**
 */
org.eclipse.swt.graphics.Path.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Path.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Path.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Path.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Path.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Path.prototype.equals = function(object){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Path.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Path.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Path.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Path.prototype.notifyAll = function(){
};

/**
 * @constructor
 */
org.eclipse.swt.graphics.PathData = function(){
	this.types = [new byte()];
	this.points = [new Number()];
	return this;
}



/**
 */
org.eclipse.swt.graphics.PathData.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.PathData.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.PathData.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.PathData.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.PathData.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.PathData.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.PathData.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.PathData.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.PathData.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {org.eclipse.swt.graphics.Color} color
 * @param {Number} int
 * @param {org.eclipse.swt.graphics.Color} color
 * @param {Number} int
 */
org.eclipse.swt.graphics.Pattern = function(device, float, float, float, float, color, int, color, int){
	return this;
}



/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Pattern.prototype.toString = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Pattern.prototype.isDisposed = function(){
};

/**
 */
org.eclipse.swt.graphics.Pattern.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Pattern.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Pattern.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Pattern.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Pattern.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Pattern.prototype.equals = function(object){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Pattern.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Pattern.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Pattern.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Pattern.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Point = function(int, int){
	this.x = new Number();
	this.y = new Number();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Point.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Point.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Point.prototype.hashCode = function(){
};

/**
 */
org.eclipse.swt.graphics.Point.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Point.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Point.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Point.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Point.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Point.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Rectangle = function(int, int, int, int){
	this.x = new Number();
	this.y = new Number();
	this.width = new Number();
	this.height = new Number();
	return this;
}



/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.Rectangle.prototype.add = function(rectangle){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Rectangle.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Rectangle.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Rectangle.prototype.hashCode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Rectangle.prototype.isEmpty = function(){
};

/**
 * @param {org.eclipse.swt.graphics.Point} point
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Rectangle.prototype.contains = function(point){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Rectangle.prototype.contains = function(int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Rectangle.prototype.intersects = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Rectangle.prototype.intersects = function(rectangle){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.Rectangle.prototype.union = function(rectangle){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.Rectangle.prototype.intersection = function(rectangle){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.Rectangle.prototype.intersect = function(rectangle){
};

/**
 */
org.eclipse.swt.graphics.Rectangle.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Rectangle.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Rectangle.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Rectangle.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Rectangle.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Rectangle.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 */
org.eclipse.swt.graphics.Region = function(device){
	this.handle = new Number();
	return this;
}



/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Region.prototype.add = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.Region.prototype.add = function(rectangle){
};

/**
 * @param {org.eclipse.swt.graphics.Region} region
 */
org.eclipse.swt.graphics.Region.prototype.add = function(region){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.Region.prototype.add = function(ints){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Region.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Region.prototype.hashCode = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.isEmpty = function(){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.contains = function(int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Point} point
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.contains = function(point){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.intersects = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.intersects = function(rectangle){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.Region.prototype.subtract = function(ints){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.Region.prototype.subtract = function(rectangle){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Region.prototype.subtract = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Region} region
 */
org.eclipse.swt.graphics.Region.prototype.subtract = function(region){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Region.prototype.isDisposed = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.Region.prototype.getBounds = function(){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Region.prototype.intersect = function(int, int, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Rectangle} rectangle
 */
org.eclipse.swt.graphics.Region.prototype.intersect = function(rectangle){
};

/**
 * @param {org.eclipse.swt.graphics.Region} region
 */
org.eclipse.swt.graphics.Region.prototype.intersect = function(region){
};

/**
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.Region.prototype.translate = function(int, int){
};

/**
 * @param {org.eclipse.swt.graphics.Point} point
 */
org.eclipse.swt.graphics.Region.prototype.translate = function(point){
};

/**
 */
org.eclipse.swt.graphics.Region.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Region.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Region.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Region.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Region.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Region.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Region.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Region.prototype.notifyAll = function(){
};

/**
 * @constructor
 */
org.eclipse.swt.graphics.Resource = function(){
	return this;
}



/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Resource.prototype.isDisposed = function(){
};

/**
 */
org.eclipse.swt.graphics.Resource.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Resource.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Resource.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Resource.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Resource.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Resource.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Resource.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Resource.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Resource.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Resource.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Resource.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.RGB = function(float, float, float){
	this.red = new Number();
	this.green = new Number();
	this.blue = new Number();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.RGB.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.RGB.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.RGB.prototype.hashCode = function(){
};

/**
 * @returns {float[]}
 */
org.eclipse.swt.graphics.RGB.prototype.getHSB = function(){
};

/**
 */
org.eclipse.swt.graphics.RGB.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.RGB.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.RGB.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.RGB.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.RGB.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.RGB.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 */
org.eclipse.swt.graphics.TextLayout = function(device){
	return this;
}



/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.TextLayout.prototype.toString = function(){
};

/**
 * @param {Number} int
 * @param {Boolean} boolean
 * @returns {org.eclipse.swt.graphics.Point}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLocation = function(int, boolean){
};

/**
 * @param {org.eclipse.swt.graphics.Point} point
 * @param {int[]} ints
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getOffset = function(point, ints){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @param {int[]} ints
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getOffset = function(int, int, ints){
};

/**
 * @param {java.lang.String} string
 */
org.eclipse.swt.graphics.TextLayout.prototype.setText = function(string){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getAlignment = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Font}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getFont = function(){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.TextStyle}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getStyle = function(int){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getText = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.TextLayout.prototype.isDisposed = function(){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setAlignment = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.Font} font
 */
org.eclipse.swt.graphics.TextLayout.prototype.setFont = function(font){
};

/**
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getBounds = function(){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getBounds = function(int, int){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getOrientation = function(){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setOrientation = function(int){
};

/**
 * @param {org.eclipse.swt.graphics.GC} gC
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.draw = function(gC, int, int){
};

/**
 * @param {org.eclipse.swt.graphics.GC} gC
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {org.eclipse.swt.graphics.Color} color
 * @param {org.eclipse.swt.graphics.Color} color
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.draw = function(gC, int, int, int, int, color, color, int){
};

/**
 * @param {org.eclipse.swt.graphics.GC} gC
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {Number} int
 * @param {org.eclipse.swt.graphics.Color} color
 * @param {org.eclipse.swt.graphics.Color} color
 */
org.eclipse.swt.graphics.TextLayout.prototype.draw = function(gC, int, int, int, int, color, color){
};

/**
 * @returns {int[]}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getRanges = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.TextStyle[]}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getStyles = function(){
};

/**
 * @returns {int[]}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getSegments = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getWidth = function(){
};

/**
 * @param {org.eclipse.swt.graphics.TextStyle} textStyle
 * @param {Number} int
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setStyle = function(textStyle, int, int){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getSpacing = function(){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setSpacing = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setWidth = function(int){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLineCount = function(){
};

/**
 * @returns {int[]}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getTabs = function(){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.TextLayout.prototype.setTabs = function(ints){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getAscent = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getDescent = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getIndent = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getJustify = function(){
};

/**
 * @param {Number} int
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLevel = function(int){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.Rectangle}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLineBounds = function(int){
};

/**
 * @param {Number} int
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLineIndex = function(int){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.swt.graphics.FontMetrics}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLineMetrics = function(int){
};

/**
 * @returns {int[]}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getLineOffsets = function(){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getNextOffset = function(int, int){
};

/**
 * @param {Number} int
 * @param {Number} int
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getPreviousOffset = function(int, int){
};

/**
 * @returns {char[]}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getSegmentsChars = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getWrapIndent = function(){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setAscent = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setDescent = function(int){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setIndent = function(int){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.swt.graphics.TextLayout.prototype.setJustify = function(boolean){
};

/**
 * @param {int[]} ints
 */
org.eclipse.swt.graphics.TextLayout.prototype.setSegments = function(ints){
};

/**
 * @param {char[]} chars
 */
org.eclipse.swt.graphics.TextLayout.prototype.setSegmentsChars = function(chars){
};

/**
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.setWrapIndent = function(int){
};

/**
 */
org.eclipse.swt.graphics.TextLayout.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.TextLayout.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.TextLayout.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextLayout.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.TextLayout.prototype.equals = function(object){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextLayout.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.TextLayout.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.TextLayout.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.TextLayout.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Font} font
 * @param {org.eclipse.swt.graphics.Color} color
 * @param {org.eclipse.swt.graphics.Color} color
 */
org.eclipse.swt.graphics.TextStyle = function(font, color, color){
	this.font = new org.eclipse.swt.graphics.Font();
	this.foreground = new org.eclipse.swt.graphics.Color();
	this.background = new org.eclipse.swt.graphics.Color();
	this.underline = new Boolean();
	this.underlineColor = new org.eclipse.swt.graphics.Color();
	this.underlineStyle = new Number();
	this.strikeout = new Boolean();
	this.strikeoutColor = new org.eclipse.swt.graphics.Color();
	this.borderStyle = new Number();
	this.borderColor = new org.eclipse.swt.graphics.Color();
	this.metrics = new org.eclipse.swt.graphics.GlyphMetrics();
	this.rise = new Number();
	this.data = new java.lang.Object();
	return this;
}



/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.TextStyle.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.TextStyle.prototype.toString = function(){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.TextStyle.prototype.hashCode = function(){
};

/**
 */
org.eclipse.swt.graphics.TextStyle.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.TextStyle.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.TextStyle.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.TextStyle.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.TextStyle.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.TextStyle.prototype.notifyAll = function(){
};

/**
 * @constructor
 * @param {org.eclipse.swt.graphics.Device} device
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Transform = function(device, float, float, float, float, float, float){
	this.handle = new org.eclipse.swt.internal.cocoa.NSAffineTransform();
	return this;
}



/**
 * @returns {java.lang.String}
 */
org.eclipse.swt.graphics.Transform.prototype.toString = function(){
};

/**
 * @param {float[]} floats
 */
org.eclipse.swt.graphics.Transform.prototype.transform = function(floats){
};

/**
 * @param {Number} float
 */
org.eclipse.swt.graphics.Transform.prototype.rotate = function(float){
};

/**
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Transform.prototype.scale = function(float, float){
};

/**
 * @param {org.eclipse.swt.graphics.Transform} transform
 */
org.eclipse.swt.graphics.Transform.prototype.multiply = function(transform){
};

/**
 * @param {float[]} floats
 */
org.eclipse.swt.graphics.Transform.prototype.getElements = function(floats){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Transform.prototype.isDisposed = function(){
};

/**
 */
org.eclipse.swt.graphics.Transform.prototype.identity = function(){
};

/**
 */
org.eclipse.swt.graphics.Transform.prototype.invert = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Transform.prototype.isIdentity = function(){
};

/**
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Transform.prototype.setElements = function(float, float, float, float, float, float){
};

/**
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Transform.prototype.translate = function(float, float){
};

/**
 * @param {Number} float
 * @param {Number} float
 */
org.eclipse.swt.graphics.Transform.prototype.shear = function(float, float){
};

/**
 */
org.eclipse.swt.graphics.Transform.prototype.dispose = function(){
};

/**
 * @returns {org.eclipse.swt.graphics.Device}
 */
org.eclipse.swt.graphics.Transform.prototype.getDevice = function(){
};

/**
 */
org.eclipse.swt.graphics.Transform.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.swt.graphics.Transform.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.swt.graphics.Transform.prototype.wait = function(long, int){
};

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.swt.graphics.Transform.prototype.equals = function(object){
};

/**
 * @returns {Number}
 */
org.eclipse.swt.graphics.Transform.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.swt.graphics.Transform.prototype.getClass = function(){
};

/**
 */
org.eclipse.swt.graphics.Transform.prototype.notify = function(){
};

/**
 */
org.eclipse.swt.graphics.Transform.prototype.notifyAll = function(){
};

