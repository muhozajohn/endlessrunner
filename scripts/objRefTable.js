const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.SpeechSynthesis,
		C3.Behaviors.Timer,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.SpeechSynthesis.Acts.SpeakText,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.AppendText,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Audio.Cnds.IsAnyPlaying,
		C3.Plugins.System.Acts.NextPrevLayout
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{Platform: 0},
	{Player: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{Tilemap: 0},
	{SpeechSynthesis: 0},
	{Timer: 0},
	{Melon: 0},
	{Audio: 0},
	{score: 0},
	{Finish: 0},
	{TiledBackground2: 0},
	{Tilemap2: 0},
	{Obstacle: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	SpeechSynthesis: class extends self.IInstance {},
	Timer: class extends self.ISpriteInstance {},
	Melon: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	score: class extends self.ITextInstance {},
	Finish: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Tilemap2: class extends self.ITilemapInstance {},
	Obstacle: class extends self.ISpriteInstance {}
}