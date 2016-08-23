window.SardineFish=(function(sar){
    {
        return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    }
                var dv = Vector2.minus(v2_, vn);
            {
                d = Math.abs(o21.mod() - (self.collider.r + target.collider.r));
                var dv = Math.abs(vn.mod());
                var t = d / dv;
                t = t > dt ? dt : t;
                self.moveTo(self.position.x + self.v.x * t, self.position.y + self.v.y * t);
                target.moveTo(target.position.x + target.v.x * t, target.position.y + target.v.y * t);

                /*self.v.plus(Vector2.multi(self.a, t));
                target.v.plus(Vector2.multi(target.a, t));*/
            }
                var dv = Vector2.minus(v2_, vn);
            {
                d = Math.abs(d);
                var dv = Math.abs(vn.mod());
                var t = d / dv;
                t = t > dt ? dt : t;
                self.moveTo(self.position.x + self.v.x * t, self.position.y + self.v.y * t);
                target.moveTo(target.position.x + target.v.x * t, target.position.y + target.v.y * t);
                //self.v.plus(Vector2.multi(self.a, t));
                //target.v.plus(Vector2.multi(target.a, t));

            }
        {
            if(!(col.E instanceof Array))
        }
    {
        if (self.collider.static && target.collider.static)
        {
            var args = new GameObject.CollideEventArgs();
            {
                args.target = target;
            }
            {
                args.target = self;
            }
            var poly = self.collider;
            var circle = target.collider;
            var v1=self.v;
            var v2=target.v;
            var minLD = -1, minPD = -1;
            var P, L;
            for(var i=0;i<poly.E.length;i++)
            {
                var l = poly.E[i];
                var n;
                l.norV = n;
                l.tanV = t;
                t.multi(1 / t.mod());
                var dv = Vector2.minus(v2, v1);
                if (Vector2.multi(n, dv) > 0)
                    continue;
                var po = Vector2.fromPoint(l.p1, circle.o);
                var dt = Vector2.multi(t, Vector2.multi(t, po)).mod();
                var dn = Vector2.multi(po, n);
                if (0 <= dn && dn <= circle.r && 0 <= dt && dt <= l.length)
                {
                    if (minLD < 0 || dn < minLD)
                    {
                        minLD = dn;
                        L = l;
                    }
                }
            }
            for (var i = 0; i < poly.V.length; i++)
            {
                var p = poly.V[i];
                var n = Vector2.fromPoint(p, circle.o);
                n.multi(1 / n.mod());
                if (Vector2.multi(n, dv) > 0)
                    continue;
                var d = Point.Distance(p, circle.o);
                if (0 <= d && d <= circle.r)
                {
                    if (minPD < 0 || d < minPD)
                    {
                        minPD = d;
                        P = p;
                    }
                }
            }
            if (minPD < 0 && minLD < 0)
                return;

            var N, T;
            var d;
            if (minLD < 0 || (minPD >= 0 && minPD < minLD))//Collide Point
            {
                d = circle.r - minPD;
                N = Vector2.fromPoint(P, circle.o);
                N.multi(1 / N.mod());
                T = new Vector2(-N.y, N.x);
            }
            else if (minPD < 0 || (minLD >= 0 && minLD < minPD))
            {
                d = circle.r - minLD;
                N = L.norV;
                T = l.tanV;
            }

            v1_ = Vector2.multi(vn, (m2 + e * m2) / (m1 + m2));

            if (poly.static)
            {
                var dv = Vector2.minus(v1_, v1);
                v1_.minus(dv);
                v2_.minus(dv);
            }
            {
                var dv = Vector2.minus(v2_, vn);
                v2_.minus(dv);
                v1_.minus(dv);
            }

            self.v = v1_;

            if (!poly.soft || !circle.soft)
            {
                dv = Math.abs(Vector2.multi(dv, N));
                var t = d / dv;
                t = t > dt ? dt : t;
                self.moveTo(self.position.x + self.v.x * t, self.position.y + self.v.y * t);
                target.moveTo(target.position.x + target.v.x * t, target.position.y + target.v.y * t);
            }

        }
        {
            var args = new GameObject.CollideEventArgs();
            {
                args.target = target;
            }
            {
                args.target = self;
            }
            {
                var p = poly.V[i];
                {
                    var l = rect.E[j];
                    {

                        {
                            maxD = d;
                        }
                    }
                }
            }
            {
                var p = rect.V[i];
                {
                    var l = poly.E[j];
                    {

                        {
                            maxD = d;
                        }
                    }
                }

            {
            }
                I1 = 1;
            {
                N = maxL.norV;
                T = maxL.tanV;
            }
                if (!pol1.cw)
            }
            v1_ = Vector2.multi(vn, (m2 + e * m2) / (m1 + m2));
            {
                var dv = Vector2.minus(v1_, v1);
                v1_.minus(dv);
                v2_.minus(dv);
            }
            {
                var dv = Vector2.minus(v2_, vn);
                v2_.minus(dv);
                v1_.minus(dv);
            }
                obj2.v = v2_;
            }
                obj1 = v1_;
            }*/
            obj1.v = v1_;
            obj2.v = v2_;

            if (!pol1.soft || !pol2.soft)
            {
                var pl = Vector2.fromPoint(l.p1, p);
                var d = Math.abs(Vector2.multi(pl, N));
                dv = Math.abs(Vector2.multi(dv, N));
                var t = d / dv;
                t = t > dt ? dt : t;
                obj1.moveTo(obj1.position.x + obj1.v.x * t, obj1.position.y + obj1.v.y * t);
                obj2.moveTo(obj2.position.x + obj2.v.x * t, obj2.position.y + obj2.v.y * t);
            }
        }
        {
            var args = new GameObject.CollideEventArgs();
            {
                args.target = target;
            }
            {
                args.target = self;
            }
            {
                var p = pol1.V[i];
                {
                    var l = pol2.E[j];
                    {

                        {
                            maxD = d;
                        }
                    }
                }
            }
            {
                var p = pol2.V[i];
                {
                    var l = pol1.E[j];
                    {

                        {
                            maxD = d;
                        }
                    }
                }

            {
            }
            v1_ = Vector2.multi(vn, (m2 + e * m2) / (m1 + m2));
            {
                var dv = Vector2.minus(v1_, v1);
                v1_.minus(dv);
                v2_.minus(dv);
            }
            {
                var dv = Vector2.minus(v2_, vn);
                v2_.minus(dv);
                v1_.minus(dv);
            }

            if (!pol1.soft || !pol2.soft)
            {
                var pl = Vector2.fromPoint(l.p1, p);
                var d = Math.abs(Vector2.multi(pl, T));
                dv = Math.abs(Vector2.multi(dv, T));
                var t = d / dv;
                t = t > dt ? dt : t;
                obj1.moveTo(obj1.position.x + obj1.v.x * t, obj1.position.y + obj1.v.y * t);
                obj2.moveTo(obj2.position.x + obj2.v.x * t, obj2.position.y + obj2.v.y * t);
            }
        }
    }
                {
                    var dv = v1x - v1.x;
                    v1x -= dv;
                    v2x -= dv;
                }
                {
                    var dv = v2x - v2.x;
                    v2x -= dv;
                    v2x -= dv;
                }
                {
                    var d = Math.abs(dx);
                    var t = Math.abs(d / dv);
                    t = t > dt ? dt : t;
                    self.moveTo(self.position.x + self.v.x * t, self.position.y + self.v.y * t);
                    target.moveTo(target.position.x + target.v.x * t, target.position.y + target.v.y * t);
                }
                {
                    var dv = v1y - v1.y;
                    v1y -= dv;
                    v2y -= dv;
                }
                {
                    var dv = v2y - v2.y;
                    v2y -= dv;
                    v2y -= dv;
                }

                if (!rect1.soft || !rect2.soft)
                {
                    var d = dy;
                    var t = Math.abs(d / dv);
                    t = t > dt ? dt : t;
                    self.moveTo(self.position.x + self.v.x * t, self.position.y + self.v.y * t);
                    target.moveTo(target.position.x + target.v.x * t, target.position.y + target.v.y * t);
                }
            return target.collider.collide(target, self, dt);
        }