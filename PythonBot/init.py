import os
from dotenv import load_dotenv
load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')	
import discord
from discord.ext import commands
intents = discord.Intents.default()
intents.message_content = True
intents.typing = True
intents.presences = True
intents.messages = True

client = commands.Bot(command_prefix='!', intents=intents)	#intents = Intents.all()
bot = commands.Bot(intents=intents, command_prefix='!')

@client.event
async def on_ready():
	print(f'{client.user} has connected to Discord!')	#await bot.process_commands(message)

@client.event			#\@bot.event
async def on_message(message):
	print(message.author, message.content, message.channel.id)
	await client.process_commands(message)	

@client.command()
async def hello(ctx):		#channel = client.get_channel(824008927368577094)
    await ctx.send(f'hello there {ctx.author.mention}')

@client.command()
async def test(ctx, arg):
	await ctx.send(arg) 


client.run(TOKEN)
