(function() {
    // save these original methods before they are overwritten
    var proto_setPos = L.Marker.prototype._setPos;

    L.Marker.addInitHook(function () {
        var iconOptions = this.options.icon && this.options.icon.options;
        var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
        if (iconAnchor) {
            iconAnchor = (iconAnchor[0] + 'px ' + iconAnchor[1] + 'px');
        }
        this.options.scalingOrigin = this.options.scalingOrigin || iconAnchor || 'center bottom' ;
        this.options.scalingVector = this.options.scalingVector || '1';

        // Ensure marker keeps scale during dragging
        this.on('drag', function(e) { e.target._applyScaling(); });
    });

    L.Marker.include({
        _setPos: function (pos) {
            proto_setPos.call(this, pos);
            this._applyScaling();
        },

        _applyScaling: function () {
            if(this.options.scalingVector) {
                this._icon.style[L.DomUtil.TRANSFORM+'Origin'] = this.options.scalingOrigin;

                this._icon.style[L.DomUtil.TRANSFORM] += ' scale(' + this.options.scalingVector + ')';
            }
        },

        setScalingVector: function(vector) {
            this.options.scalingVector = vector;
            this.update();
            return this;
        },

        setScalingOrigin: function(origin) {
            this.options.scalingOrigin = origin;
            this.update();
            return this;
        }
    });
})();
