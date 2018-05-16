import { GameSystem } from "./game-system.js";
class AssetsClass 
{
    constructor()
    {
        this.assets = [];
        this.bgForest = [
            "res/img/bg-forest/0.png",
            "res/img/bg-forest/1.png",
            "res/img/bg-forest/2.png",
            "res/img/bg-forest/3.png",
        ].map(url =>
        {
            let bg = new InfiniteTexture({
                src: url,
                sliceWidth: 3840,
                sliceHeight: 2160,
                direction: InfiniteTexture.Direction.Horizontal,
                yMax: 3000,
                yMin: -100,
            });
            bg.moveTo(0, -750);
            this.assets.push(bg);
            return bg;
            });
        
        this.groundForest = new InfiniteTexture({
            src: "res/img/ground.png",
            sliceWidth: 1920,
            sliceHeight: 786,
            direction: InfiniteTexture.Direction.Horizontal,
        });
        this.groundForest.moveTo(0, 10);

        this.playerStandLeftAnim = new ImageAnimation({
            src: "res/img/stand-left.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 5,
            count: 13
        });
        this.playerStandRightAnim = new ImageAnimation({
            src: "res/img/stand.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 5,
            count: 13
        });
        this.playerWalkLeftAnim = new ImageAnimation({
            src: "res/img/walk-left.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 2
        });
        this.playerWalkRightAnim = new ImageAnimation({
            src: "res/img/walk.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 2
        });
        this.playerAttackLeftAnim = null;
        this.playerAttackRightAnim = null;
        this.playerJumpLeftAnim = new ImageAnimation({
            src: "res/img/stand-left.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 1
        });
        this.playerJumpRightAnim = new ImageAnimation({
            src: "res/img/jump-right.png",
            frameWidth: 500,
            frameHeight: 500,
            renderWidth: 500,
            renderHeight: 500,
            fps: 15,
            count: 2,
            loop: false
        });

        this.npcStandLeftAnim = new ImageAnimation({
            src: "res/img/stand-left.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 1
        });
        this.npcStandRightAnim = new ImageAnimation({
            src: "res/img/stand.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 1
        });
        this.npcWalkLeftAnim = new ImageAnimation({
            src: "res/img/walk-left.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 2
        });
        this.npcWalkRightAnim = new ImageAnimation({
            src: "res/img/walk.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 2
        });
        this.npcAttackLeftAnim = null;
        this.npcAttackRightAnim = null;
        this.npcJumpLeftAnim = new ImageAnimation({
            src: "res/img/stand-left.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 1
        });
        this.npcJumpRightAnim = new ImageAnimation({
            src: "res/img/stand.png",
            frameWidth: 200,
            frameHeight: 200,
            renderWidth: 200,
            renderHeight: 200,
            fps: 15,
            count: 1
        });
        for (const key in this)
        {
            if (this.hasOwnProperty(key))
            {
                const element = this[key];
                if (element instanceof ImageAnimation || element instanceof InfiniteTexture)
                    this.assets.push(element);
            }
        }
    }
    
    load(complete, progress)
    {
        let taskMgr = new TaskManagment();
        this.assets.forEach(element =>
        {
            let task = new Task((resolve) => element.load(resolve));
            taskMgr.addTask(task);
        });
        taskMgr.onComplete = () =>
        {
            if (progress)
                progress(taskMgr.completed.length / taskMgr.tasks.length);    
        };
        taskMgr.onAllComplete = () =>
        {
            if (complete)
                complete();    
        }
        taskMgr.start();
    }
}
const Assets = new AssetsClass();
export { Assets };