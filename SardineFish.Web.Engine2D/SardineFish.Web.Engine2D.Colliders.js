window.SardineFish=(function(sar){
        {
            if (col.o.x <= this.o.x && this.o.x <= col.o.x + col.width)
            {
                if (col.o.y - this.r <= this.o.y && this.o.y <= col.o.y + col.height + this.r)
                    return true;
            }
            if (col.o.y <= this.o.y && this.o.y <= col.o.y + col.height)
            {
                if (col.o.x - this.r <= this.o.x && this.o.x <= col.o.x + col.width + this.r)
                    return true;
            }
        }
            {
                args.target = target;
            }
            {
                args.target = self;
            }
            {
                var p = V[i];
                p.norV = new Vector2(p.x - this.center.x, p.y - this.center.y);
                p.tanV = new Vector2(-p.norV.y, p.norV.x);
            }
            {
                var l = E[i];
                if (v2.x * l.norV.x + v2.y * l.norV.y > 0) //Away from edge
                    continue;
                var n = new Vector2(circle.o.x - l.p1.x, circle.o.y - l.p1.y);
                var t = l.tanV.x * n.x + l.tanV.y * n.y;
                if (0 <= t && t <= l.length) //In edge
                {
                    var d = (n.x * l.norV.x + n.y * l.norV.y);
                    if (0 <= d && d <= circle.r) //Touch
                    {
                        if (d < minLD || minLD < 0)
                        {
                            minL = l;
                            minLD = d;
                        }
                    }
                }
            }
            {
                var p = V[i];
                if (v2.x * p.norV.x + v2.y * p.norV.y > 0) //Away from Point
                    continue;
                var n = new Vector2(circle.o.x - p.x, circle.o.y - p.y);
                var d = n.x * p.norV.x + n.y * p.norV.y;
                if (0 <= d && d <= circle.r)
                {
                    if (d < minPd || minPD < 0)
                    {
                        minP = p;
                        minPD = d;
                    }
                }
            }
            {
                vn = Vector2.multi(minL.norV, (v2.x * minL.norV.x + v2.y * minL.norV.y));
                vt = new Vector2(v2.x - vn.x, v2.y - vn.y);
            }
                var n = new Vector2(minP.x - circle.o.x, minP.y - circle.o.y);
                var Ln = n.x * n.x + n.y * n.y;
                vn = Vector2.multi(n, (n.x * v2.x + n.y * v2.y) / Ln);
                vt = new Vector2(v2.x - vn.x, v2.y - vn.y);
            }
            else
                return;
            if (!vn || !vt)
                return;
            if (self.collider.static)
            {
                v1.x = 2 * vn.x;
                v1.y = 2 * vn.y;
            }
            else if (target.collider.static)
            {
                v2.x = -vn.x;
                v2.y = -vn.y;
            }
            else
            {
                v1 = Vector2.multi(vn, (m2 + e * m2) / (m1 + m2));
                v2 = Vector2.multi(vn, (m2 - e * m1) / (m1 + m2));
            }
        {
            var p = this.V[i];
            p.norV = new Vector2(p.x - this.center.x, p.y - this.center.y);
            p.tanV = new Vector2(-p.norV.y, p.norV.x);
        }
    {
        if (obj instanceof Ground)
        {
            return (!(this.o.x > obj.xR || this.o.x + this.width < obj.xL) && (this.o.y >= obj.y && obj.y >= this.o.y - this.height));
        }
        {
            return (!(this.o.y - this.height > obj.yH || this.o.y < obj.yL) && (this.o.x <= obj.x && obj.x <= this.o.x + this.width));
        }
        {
            var x1 = (obj.o.x - this.o.x) * (obj.o.x + obj.width - this.o.x);
            {
                return false;
            }
        }
        {
            if (this.o.x <= obj.x && obj.x <= this.o.x + this.width && obj.y <= this.o.y && this.o.y - this.height <= obj.y)
        }
    }
            return obj.collider.collide(obj, main, dt);
        }