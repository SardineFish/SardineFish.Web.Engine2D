
        {
            for (var p = this.head ; p != null; p = p.next)
            {
                if (p.object == node)
                    node = p;
            }
        }
    {
        this.position = new Point(0, 0);
        this.left = Mouse.ButtonState.None;
        this.middle = Mouse.ButtonState.None;
        this.right = Mouse.ButtonState.None;
        this.wheel = 0;
    }
    {
        var touchList = new LinkList();
        var touchArray = [];
        Object.defineProperty(this, "touches", {
            get: function ()
            {
                return touchList.toArray();
            }
        });
        this.getById = function (id)
        {
            return touchArray[id];
        }
        this.addTouch = function (args)
        {
            if (!(args instanceof Touch.TouchEventArgs))
                throw new Error("Paramate must be TouchEventArgs.");
            touchArray[args.id] = args;
            touchList.add(args);
        }
        this.removeTouch = function (args)
        {
            if (!(args instanceof Touch.TouchEventArgs))
                throw new Error("Paramate must be TouchEventArgs.");
            if (!touchArray[args.id])
                return;
            touchArray[args.id] = null;
            touchList.remove(args);
        }
    }
    {
        var args=new TouchEventArgs ();
        args.x = this.x;
        args.y = this.y;
        args.type = this.type;
        args.touches = this.touches;
        args.id = this.id;
        args.handled = this.handled;
        return args;
    }
    {
        this.keys = {};
        for (var key in Keyboard.Keys)
        {
            if (isNaN(Keyboard.Keys[key]))
                continue;
            this.keys[Keyboard.Keys[key]] = Keyboard.KeyState.None;
        }
        this.shift = false;
        this.alt = false;
        this.ctrl = false;
        this.meta = false;
    }
        this.keyboard = new Keyboard();
        this.mouse = new Mouse();
        this.touch = new Touch();
    }
{
                scene.devices.keyboard.keys[e.keyCode] = Keyboard.KeyState.Down;
            }
            {
                var argsGUI = new Touch.TouchEventArgs();
            }
            {
                var id = e.changedTouches[i].identifier;
                if (!scene.devices.touch.getById(id) || !touchArrayGUI [id])
                    continue;

                var argsGUI = touchArrayGUI[id];
                argsGUI.type = Touch.Types.Move;
                argsGUI.x = e.changedTouches[i].pageX;
            }
            {
                var id = e.changedTouches[i].identifier;
                if (!scene.devices.touch.getById(id) || !touchArrayGUI[id])
                    continue;

                var argsGUI = touchArrayGUI[id];
                touchArrayGUI[id] = null;
                touchListGUI.remove(argsGUI);
                argsGUI.type = Touch.Types.End;
            }
            }
            {
                alert(ex.message);
            }